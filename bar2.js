//Can use object literals if we dont want encapsulation
var Bar = function ($domelement, color) {
  console.log("this is in bar", this)
  this.privatesortby = "sortkey";
  this.privatesizeby = "sizekey";
  this.$privateDomElement = $domelement;

  this.privateFormatItem = function(item){
    var bar="<div class='bar' style='background-color : "+color+"; width:"+item[this.privatesizeby]*10+"px;'>"+item['name']+"</div>";
    return bar;
  };

  this.privateSortMethod = function (unSortedList) {
      var that = this;
      return _.sortBy(unSortedList, function(item) {return item[that.privatesortby];});
  };
  this.privatePlotMethod = function(inputList) {
    for (var j=0;j<inputList.length;j++){
        this.$privateDomElement.append(this.privateFormatItem(inputList[j]));
    }
  }
}
  //js has prototypical inheritance: its based on clones
 // here we are saying that the object bar clones has these methods

Bar.prototype.plot = function (unSortedList) {
          console.log(">>", this.privatesortby, this.privatesizeby)
          sortedList = this.privateSortMethod(unSortedList);
          console.log(sortedList)
          this.privatePlotMethod(sortedList);
}
Bar.prototype.setSortBy = function(sortby){
        this.privatesortby = sortby;
}
Bar.prototype.setSizeBy = function(sizeby){
        this.privatesizeby = sizeby;
}
Bar.prototype.setGraphDom = function($inputDomElement){
        this.$privateDomElement = $inputDomElement;
}
