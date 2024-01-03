function* createPaginator(items, pageSize) {
    let pageIndex = 0;
  
    while (pageIndex < items.length) {
      yield items.slice(pageIndex, pageIndex + pageSize);
      pageIndex += pageSize;
    }
  }
  
  const items = [1, 2, 3, 4, 5, 6];
  const pageSize = 3;
  const paginator = createPaginator(items, pageSize);
  
  for (const page of paginator) {
    console.log(page);
  }
  