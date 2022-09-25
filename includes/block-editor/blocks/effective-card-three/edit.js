
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import {InspectorControls, BlockControls, AlignmentToolbar} from "@wordpress/block-editor"
import {TextControl, Flex, FlexBlock, FlexItem, Button, Icon, PanelBody, PanelRow, ColorPicker, FormFileUpload} from "@wordpress/components"
import {ChromePicker} from "react-color"

import './editor.scss';

 export default function Edit(props) {
        const {
            attributes: {background, titleColor, content, title, bgColor },
            setAttributes,

        } = props;
        const blockProps = useBlockProps();
        const onChangeContent = ( event ) => {
            setAttributes( { content: event.target.value } );
        };
		const onChangeTitle = ( event ) => {
            setAttributes( { title: event.target.value } );
        };

        return (
<div { ...blockProps }>

      <InspectorControls>
	  <div id="gutenpride-controls">
	  <fieldset>
                            <legend className="blocks-base-control__label">
                                { __( 'Background Card', 'gutenpride' ) }
                            </legend>
        <PanelBody tittle="Background Color" initialOpen={true} >
	tło 		  <ChromePicker  color={background} onChangeComplete={x => props.setAttributes({background: x.hex})} disableAlpha={false} />



       		  </PanelBody>
</fieldset>
                        <fieldset>
                            <legend className="blocks-base-control__label">
                                { __( 'Background color', 'gutenpride' ) }
                            </legend>
        <PanelBody tittle="Card Header: background i title" initialOpen={true} >
	tło 		  <ChromePicker  color={titleColor} onChangeComplete={x => props.setAttributes({titleColor: x.hex})} disableAlpha={false} />


		tytuł 	<input

                onChange={ onChangeTitle }
                value={ title }
            />
       		  </PanelBody>
</fieldset>
<fieldset>
                            <legend className="blocks-base-control__label">
                                { __( 'Card Content: Color i content', 'gutenpride' ) }
                            </legend>
		  <PanelBody tittle="Background Color" initialOpen={true} >
		  <ChromePicker  color={bgColor} onChangeComplete={x => props.setAttributes({bgColor: x.hex})} disableAlpha={true} />

		  Opis <input

                onChange={ onChangeContent }
                value={ content }
            />

		  </PanelBody>
		  </fieldset>
		  </div>
          </InspectorControls>





		  <a class="card1" href="#">
			<div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: background}}>
    <h3 style={{color: titleColor}}>{title}</h3>
    <p class="small" style={{color: bgColor, alignSelf: "flex-end"}}>{content}</p>
    <div class="go-corner" href="#" >
      <div class="go-arrow" >
      </div>
    </div>
	</div>
  </a>



</div>
        );
    }
