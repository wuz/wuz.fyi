import CMS from 'netlify-cms-app';
import { MdxControl, MdxPreview } from 'netlify-cms-widget-mdx';

CMS.registerWidget('mdx', MdxControl, MdxPreview);
