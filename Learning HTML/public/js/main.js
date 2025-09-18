// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
	const faqContainer = document.querySelector('.faq-content');
	
	faqContainer.addEventListener('click', (e) => {
		// console.log(e)			// Debug
		const groupHeader = e.target.closest('.faq-group-header');
		
		// Have nothing happen if the Header is not clicked on
		if (!groupHeader) return;
		
		const group = groupHeader.parentElement;
		const groupBody = group.querySelector('.faq-group-body');
		const icon = groupHeader.querySelector('i');
		
		// Toggle icon
		icon.classList.toggle('fa-plus');
		icon.classList.toggle('fa-minus');
		
		// Add open to the body -- Toggle visibility of body
		groupBody.classList.toggle('open');
		
		// Close other opened FAQ bodies when clicking on another body
		const otherGroups = faqContainer.querySelectorAll('.faq-group');
		
		otherGroups.forEach((otherGroup) => {
			if (otherGroup !== group) {
				const otherGroupBody = otherGroup.querySelector('.faq-group-body');
				const otherIcon = otherGroup.querySelector('.faq-group-header');
				
				otherGroupBody.classList.remove('open');
				otherIcon.classList.remove('fa-minus');
				otherIcon.classList.add('fa-plus');
			}
		});
	});
});