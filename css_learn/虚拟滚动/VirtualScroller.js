class VirtualScroller {
  constructor({
    element,
    height,
    rowHeight,
    pageSize,
    renderItem,
    loadMore
  }) {
    if (typeof element === 'string') {
      this.scroller = document.querySelector(element)
    } else if (element instanceof HTMLElement) {
      this.scroller = element
    }

    if (!this.scroller) {
      throw new Error('Invalid element')
    }

    if (!height || (typeof height !== 'number' && typeof
      height !== 'string')) {
      throw new Error('Invalid height')
    }

    if (!rowHeight || typeof rowHeight !== 'number') {
      throw new Error('Invalid rowHeight')
    }

    if (typeof renderItem !== 'function') {
      throw new Error('renderItem should be a function')
    }

    if (typeof loadMore !== 'function') {
      throw new Error('loadMore should be a function')
    }

    //set props
    this.height = height
    this.rowHeight = rowHeight
    this.pageSize = typeof pageSize === 'number' &&
      pageSize > 0 ? pageSize : 50
    this.renderItem = renderItem
    this.loadMore = loadMore
    this.data = []

    //create content box
    const contentBox = document.createElement('div')
    this.contentBox = contentBox
    this.scroller.append(contentBox)

    this.scroller.style.height = typeof height === 'number' ?
      height + 'px' : height
    this.scroller.addEventListener('scroll', this.handleScroll)

    this.loadInitdata()
  }

  //private properties
  #scrollTop = 0
  #topHiddenCount = 0
  #bottomHiddenCount = 0

  //private methods
  handleScroll = e => {
    const { clientHeight, scrollHeight, scrollTop } = e.target
    const distanceToBottom = scrollHeight - (clientHeight + scrollTop)
    if (distanceToBottom < 50) {
      console.log('load more')
      const newData = this.loadMore(this.pageSize)
      this.data.push(...newData)
      this.renderNewData(newData)
    }

    /*
    direction: 
    1: scroll to bottom
    -1: scroll to top 
     */
    const direction = scrollTop > this.#scrollTop ? 1 : -1
    this.#scrollTop = scrollTop
    this.toggleTopItems(direction)
    this.toggleBottomItems(direction)
  }

  toggleTopItems = direction => {
    const { scrollTop } = this.scroller
    const firstVisibleItemIndex = Math.floor(scrollTop / this.rowHeight)
    const rows = this.contentBox.children
    //下滑使用padding top 替换看不见的top节点
    if (direction === 1) {
      for (let i = this.#topHiddenCount; i < firstVisibleItemIndex; i++) {
        if (rows[0]) rows[0].remove()
      }
    }

    //恢复隐藏的top节点
    if (direction === -1) {
      for (let i = this.#topHiddenCount - 1; i >= firstVisibleItemIndex; i--) {
        console.log(this.data)
        const item = this.data[i]
        const row = this.renderRow(item)
        this.contentBox.prepend(row)
      }
    }

    this.#topHiddenCount = firstVisibleItemIndex;
    const paddingTop = this.#topHiddenCount * this.rowHeight
    this.contentBox.style.paddingTop = paddingTop + 'px'
  }

  toggleBottomItems = direction => {
    const { scrollTop, clientHeight } = this.scroller
    const lastVisibleItemIndex = Math.floor((scrollTop + clientHeight) / this.rowHeight)
    const rows = [...this.contentBox.children]

    //使用padding bottom替换看不见的bottom元素
    if (direction === -1) {
      for (let i = lastVisibleItemIndex + 1; i < this.data.length; i++) {
        const row = rows[i - this.#topHiddenCount]
        if (row) row.remove()
      }
    }

    if (direction === 1) {
      for (let i = this.#topHiddenCount + rows.length; i <= lastVisibleItemIndex; i++) {
        const item = this.data[i]
        const row = this.renderRow(item)
        this.contentBox.append(row)
      }
    }

    this.#bottomHiddenCount = this.data.length - (
      this.#topHiddenCount + this.contentBox.children.length)
    const paddingBottom = this.#bottomHiddenCount * this.rowHeight + 'px'
    this.contentBox.style.paddingBottom = paddingBottom;
  }

  renderRow = item => {
    const rowContent = this.renderItem(item)
    const row = document.createElement('div')
    row.style.height = this.rowHeight + 'px'
    row.dataset.index = item
    row.appendChild(rowContent)
    return row
  }

  renderNewData = newData => {
    newData.forEach(item => {
      this.contentBox.append(this.renderRow(item))
    });
  }

  loadInitdata = () => {
    const newData = this.loadMore(this.pageSize)
    this.data.push(...newData)
    this.renderNewData(newData)
  }
}