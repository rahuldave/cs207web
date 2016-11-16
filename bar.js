//Can use object literals if we dont want encapsulation
var Bar = (function () {

  var privatesortby = "sortkey";
  var privatesizeby = "sizekey";
  var $privateDomElement = $('.graph');

  privateFormatItem = function(item){
    var bar="<div class='bar' style='width:"+item[privatesizeby]*10+"px;'>"+item['name']+"</div>";
    return bar;
  };

  privateSortMethod = function (unSortedList) {
      return _.sortBy(unSortedList, function(item) {return item[privatesortby];});
  };
  privatePlotMethod = function(inputList) {
    for (var j=0;j<inputList.length;j++){
        $privateDomElement.append(privateFormatItem(inputList[j]));
    }
  }

  //easier to create an options object and merge it instead of so many setters
  //see _.extend

  return {
      plot: function (unSortedList) {
          sortedList = privateSortMethod(unSortedList);
          privatePlotMethod(sortedList);
      },
      setSortBy: function(sortby){
        privatesortby = sortby;
      },
      setSizeBy: function(sizeby){
        privatesizeby = sizeby;
      },
      setGraphDom: function($inputDomElement){
        $privateDomElement = $inputDomElement;
      }
  };
})();
