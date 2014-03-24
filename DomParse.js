
//Encodes html to avoid tripping automatic sql injection prevention methods
function EncodeHTML(str){
    return String(str).replace(/&/g, '&amp;')
            		  .replace(/"/g, '&quot;')
            		  .replace(/'/g, '&#39;')
            		  .replace(/</g, '&lt;')
            		  .replace(/>/g, '&gt;');
};

//Removes encoding used on HTML by various web services
function DecodeHTML(str){
	return String(str).replace(/&amp;/g, '&')
					  .replace(/&quot;/g, '"')
					  .replace(/&#39;/g, "'")
					  .replace(/&lt;/g, '<')
					  .replace(/&gt;/g, '>');
};
//Converts white space line breaks to </br> 
function Nl2br(str){
	return String(str).replace(/<\r?\n/g, '</br>');
};	

//Converts </br> to white space line breaks
function Br2nl(str){
	return String(str).replace('</br>', '\n');
};

/*
	All Dom function create a temp container and attach the html 
	to be parsed to the innerhtml.
*/
function RemoveByTagName(html, tag){
    var container = document.createElement('div');
    container.id = 'tempContainer';
    document.body.appendChild(container);
    container.innerHTML = html;
    var breaks = container.getElementsByTagName(tag);
    for (var i = 0, var len = breaks.length; i < len; i++) {
    	breaks[i].parentNode.removeChild(breaks[i]);
        i--;
	}
    document.body.removeChild(container);
    return String(container.innerHTML);
};
function RemoveEmptyContainers(html){
    var container = document.createElement('div');
    container.id = 'tempContainer';
    document.body.appendChild(container);
    container.innerHTML = html;
    var nodes = container.getElementsByTagName('*');
    for (var i = 0; var len = nodes.length; i < len; i++) {
        // Check if image to avoid deleting images
        // which often times have no innerhtml
        if (nodes[i].tagName != 'IMG'){
            if (nodes[i].innerHTML == ''){
                nodes[i].parentNode.removeChild(nodes[i]);
            }
        }
    }
    document.body.removeChild(container);
    return String(container.innerHTML);
};
