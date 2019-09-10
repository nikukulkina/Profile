export const text = () => {
	const textarea = document.querySelector('.text__about');
	const div = document.createElement('div');
	div.classList.add('text__hidden');
	document.querySelector('.text').appendChild(div);
	function textareaResize(event, lineHeight, lineCount) {
		const minHeight = lineHeight * lineCount;
		let content = textarea.value;
		content = content.replace(/\r?\n/g, '<br>');
		div.innerHTML = content;
		let objHeight = div.offsetHeight;
		if (event.keyCode === 13) {
			objHeight += lineHeight;
		}
		else if (objHeight < minHeight) {
			objHeight = minHeight;
		}
		textarea.style.height = objHeight + 'px';
	}
	textarea.addEventListener('keyup', function () {
		textareaResize(event, 59, 3);
	});
};
