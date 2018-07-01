export default () => {
  return [
    { title: 'JavaScript: The Good Parts', pages: 172 },
    { title: 'Harry Potter and The Half Blood Prince', pages: 652 },
    { title: 'The Dark Tower', pages: 845 },
    { title: 'Eloquent Ruby', pages: 448 },
    { title: 'World War Z', pages: 342 },
    { title: 'Diary of a Wimpy Kid', pages: 221 }
  ].sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();

    let comparison = 0;

    if (titleA > titleB) {
      comparison = 1;
    } else if (titleA < titleB) {
      comparison = -1;
    }
    return comparison;
  });
}
