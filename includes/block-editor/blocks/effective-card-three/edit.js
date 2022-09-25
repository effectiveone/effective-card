import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
} from "@wordpress/components";
import { ChromePicker } from "react-color";

import "./editor.scss";

export default function Edit(props) {
	const {
		attributes: {


			background,
			titleColor,
			content,
			title,
			bgColor,
		},
		setAttributes,
	} = props;
	const blockProps = useBlockProps();
	const onChangeContent = (event) => {
		setAttributes({ content: event.target.value });
	};
	const onChangeTitle = (event) => {
		setAttributes({ title: event.target.value });
	};

	const setImage = (event) => {
		console.log("image", event.currentTarget.files)
		// setAttributes({ image: event.currentTarget.files });
	};

	return (
		<div {...blockProps}>
			<InspectorControls>
				<div id="gutenpride-controls">
				<fieldset>
						<legend className="blocks-base-control__label">
							{__("Background color", "gutenpride")}
						</legend>
						<PanelBody
							tittle="Front: background, color, title"
							initialOpen={true}
						>

							Kolor tła{" "}
							<ChromePicker
								color={background}
								onChangeComplete={(x) =>
									props.setAttributes({ background: x.hex })
								}
								disableAlpha={false}
							/>
													</PanelBody>

			</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__("Background color", "gutenpride")}
						</legend>
						<PanelBody
							tittle="Front: background, color, title"
							initialOpen={true}
						>

							Kolor tytułu{" "}
							<ChromePicker
								color={titleColor}
								onChangeComplete={(x) =>
									props.setAttributes({ titleColor: x.hex })
								}
								disableAlpha={false}
							/>
							tytuł <input onChange={onChangeTitle} value={title} />
						</PanelBody>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__("Card Content: Color i content", "gutenpride")}
						</legend>
						<PanelBody tittle="Background Color" initialOpen={true}>

							Kolor opisu{" "}
							<ChromePicker
								color={bgColor}
								onChangeComplete={(x) =>
									props.setAttributes({ bgColor: x.hex })
								}
								disableAlpha={true}
							/>
							Opis <input onChange={onChangeContent} value={content} />
						</PanelBody>
					</fieldset>
				</div>
			</InspectorControls>


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
