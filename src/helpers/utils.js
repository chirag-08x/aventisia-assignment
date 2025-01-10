export const getPaginationRange = (currentPage, totalPages) => {
  const pages = [];
  const maxVisiblePages = 5;
  const boundaryCount = 2;

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage <= boundaryCount) {
      for (let i = 2; i <= boundaryCount + 2; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages - 1, totalPages);
    } else if (currentPage > totalPages - boundaryCount) {
      pages.push("...");
      for (let i = totalPages - boundaryCount - 2; i < totalPages; i++) {
        pages.push(i);
      }
      pages.push(totalPages);
    } else {
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

import moment from "moment";

export const getRandomDate = (startDate, endDate) => {
  const start = moment("2024-01-01");
  const end = moment("2024-12-31");

  const randomTimestamp =
    Math.random() * (end.valueOf() - start.valueOf()) + start.valueOf();

  return moment(randomTimestamp);
};
