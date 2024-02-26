

const CUSTOM_HTML=`<h1>hii</h1>
<div> my name is ram</div>`
function HtmlTest(){
    return <div dangerouslySetInnerHTML={{__html: CUSTOM_HTML}}></div>
}
export default HtmlTest;
