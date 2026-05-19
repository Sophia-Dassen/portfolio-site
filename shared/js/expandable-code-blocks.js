const expandableBlocks =
  document.querySelectorAll('.expandable-code-block');

expandableBlocks.forEach((block) => {

  const button =
    block.querySelector('.expand-code-button');

  button.addEventListener('click', () => {

    block.classList.toggle('expanded');

  });

});
