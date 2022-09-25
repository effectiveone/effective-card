import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function save(props) {
	const {
		attributes: {background, titleColor,  content, title, bgColor },

		className,
	} = props;
	const blockProps = useBlockProps();
	return (

<div {...useBlockProps}>
<a class="card1" href="#">
    <h3 style={{color: titleColor}}>{title}</h3>
    <p class="small" style={{color: bgColor}}>{content}</p>
    <div class="go-corner" href="#" style={{backgroundColor: background}}>
      <div class="go-arrow">
      </div>
    </div>
  </a>
</div>
	);
}
