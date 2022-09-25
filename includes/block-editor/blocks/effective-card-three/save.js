import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function save(props) {
	const {
		attributes: { backgroundColorFront, backgroundColorBack, background, titleColor, content, title, bgColor },

		className,
	} = props;
	const blockProps = useBlockProps();
	return (

<div {...useBlockProps}>
<div class="webinar-grid">

<a  class="link-block" style={{color: titleColor, backgroundColor: background}}>
  <div class="jumbotron left-right-jumbotron-block">
	<div class="webinar-image-container">
	</div>
	<h1 class="dundas-blue-text-long" style={{color: titleColor}}>
{title}
  </h1>

	<div class="webinar-content-box">
<p style={{color: bgColor}}> {content}</p>
	</div>
  </div>
</a>

</div>
</div>
	);
}
