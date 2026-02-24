// exercise1.js

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function (event) {
  // 1. Find the closest trigger
  const trigger = event.target.closest('.accordion-trigger');
  if (!trigger) return; // Click wasn't on a trigger

  // 2. Find the parent .accordion-item
  const clickedItem = trigger.closest('.accordion-item');

  // Check if the clicked item is already open
  const isOpen = clickedItem.classList.contains('open');

  // 3. Close ALL accordion items
  const allItems = accordion.querySelectorAll('.accordion-item');
  allItems.forEach(function (item) {
    item.classList.remove('open');
  });

  // 4. Toggle .open on the clicked item only
  if (!isOpen) {
    clickedItem.classList.add('open');
  }
});