import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function save(props) {
	const {
		attributes: {background, titleColor, image, content, title, bgColor },

		className,
	} = props;
	const blockProps = useBlockProps();
	return (

<div {...useBlockProps} class="card transition" style={{background: background}}>
  <h2 class="transition">   {title}</h2>
 <p style={{color: bgColor}}> {content}</p>
  <div class="card_circle transition"
  style={{
  backgroundColor: titleColor}}
  ></div>
</div>
	);
}
