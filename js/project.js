document.getElementById('complexity-filter').addEventListener('change', function() {
  const selectedComplexity = this.value;
  const projectItems = document.getElementsByClassName('project-item');
  
  for (let i = 0; i < projectItems.length; i++) {
    let projectItem = projectItems[i];
    let complexity = projectItem.getAttribute('data-complexity');
    
    if (selectedComplexity === 'all' || selectedComplexity === complexity) {
      projectItem.style.display = 'block';
    } else {
      projectItem.style.display = 'none';
    }
  }
});

