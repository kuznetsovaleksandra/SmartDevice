const chapters = document.querySelectorAll('.chapter');

const chaptersClose = (tab) => {
  const tabTitle = tab.querySelector('.chapter__title');
  const tabContent = tab.querySelector('.chapter__content');

  tabTitle.classList.add('chapter__title--closed');
  tabContent.classList.remove('chapter__content--active');
};

const chaptersOpen = (tab) => {
  const tabTitle = tab.querySelector('.chapter__title');
  const tabContent = tab.querySelector('.chapter__content');

  tabTitle.classList.remove('chapter__title--closed');
  tabContent.classList.add('chapter__content--active');
};

export const chaptersStart = () => {
  chapters.forEach((tab) => {
    chaptersClose(tab);

    const tabTitle = tab.querySelector('.chapter__title');
    tabTitle.addEventListener('click', () => {
      if (tabTitle.classList.contains('chapter__title--closed')) {
        chapters.forEach((openTab) => {
          chaptersClose(openTab);
        });
        chaptersOpen(tab);
      } else {
        chaptersClose(tab);
      }
    });
  });
};
