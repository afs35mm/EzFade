EzFade
======

jQuery plugin for easy fading slideshow

Lightweight fade plugin, sans-controls. Resizes all images, keeping aspect ratio, center images, and fill up entire containing element.

Throw some images in a container and slap a jQuery $('example').ExFade() and boom. 

Working demo example here: [ezfade.afs35mm.com/](http://ezfade.afs35mm.com/)

Usage
------
Options are added as an object passed to the EzFade function. 

<pre>
$('#fadeMe').EzFade({ 
	width:'420px', 
	height:'420px' 
});
</pre>

<table>
        <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Options</th>
            <th>Default</th>
        </tr>
        <tr>
            <td>duration</td>
            <td>Number</td>
            <td>Anything. Determines length between transitions. In milliseconds.</td>
            <td>3000</td>
        </tr>
        <tr>
            <td>parentName</td>
            <td>String</td>
            <td>Optional. Gives the container of slideshow element class of specified string. This allows for style targeting in stylesheet. </td>
            <td>EzFade</td>
        </tr>
        <tr>
            <td>elmName</td>
            <td>String</td>
            <td>Optional. Gives the elements of slideshow class of specified string. This allows for style targeting in stylesheet. </td>
            <td>EzFadeElm</td>
        </tr>
         <tr>
            <td>fadeSpeed</td>
            <td>Number</td>
            <td>Anything. Determines lenght of fade. In milliseconds. </td>
            <td>1000</td>
        </tr>
        <tr>
            <td>width</td>
            <td>Number</td>
            <td>Standard CSS width attibutes only. Gives slideshow a width.</td>
            <td>600</td>
        </tr>
        <tr>
            <td>height</td>
            <td>Number</td>
            <td>Standard CSS height attibutes only. Gives slideshow a height.</td>
            <td>400</td>
        </tr>
        <tr>
            <td>position</td>
            <td>String</td>
            <td>Standard CSS positioning attibutes only. Gives slideshow a position.</td>
            <td>relative</td>
        </tr>
</table>
