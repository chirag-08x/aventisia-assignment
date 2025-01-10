export const getPaginationRange = (currentPage, totalPages) => {
  const pages = [];
  const maxVisiblePages = 5; // Adjust as needed
  const boundaryCount = 2; // Number of pages to show at the beginning and end

  if (totalPages <= maxVisiblePages) {
    // Show all pages if totalPages is less than or equal to maxVisiblePages
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Always show the first page
    pages.push(1);

    // Add extra pages near the start if the current page is within the boundary range
    if (currentPage <= boundaryCount) {
      for (let i = 2; i <= boundaryCount + 2; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages - 1, totalPages);
    }
    // Add extra pages near the end if the current page is within the boundary range
    else if (currentPage > totalPages - boundaryCount) {
      pages.push("...");
      for (let i = totalPages - boundaryCount - 2; i < totalPages; i++) {
        pages.push(i);
      }
      pages.push(totalPages);
    }
    // Handle the middle range with ellipsis
    else {
      pages.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
    }
  }

  return pages;
};
