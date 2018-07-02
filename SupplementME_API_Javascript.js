
// The below code fills in the first row of the table
var trending_news = "Health News Articles";
var queryURL = "https://api.nutritionix.com/v1_1/search/supplement?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=ae6176c4&appKey=b5598709f4e2219dfbdb4d56c66bea69"
    //var appId = "ae6176c4";
    //var apiKey = "b5598709f4e2219dfbdb4d56c66bea69"
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
        // Get reference to existing tbody element, create a new table row element
    var tBody = $("#health-table > tbody");
    var tRow = $("<tr>");
    var data = response.hits


    for (let i = 0; i < data.length; i++) {
        console.log("response.Brand_Name", response.hits[i].fields.brand_name);
        console.log("response.Item_Name", response.hits[i].fields.item_name);
        console.log("response.Brand_ID", response.hits[i].fields.item_id);
        console.log("response.Item.ID", response.hits[i].fields.item_id);
    }

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var brand_name = $("<td>").text(response.hits[0].fields.brand_name);
    var item_name = $("<td>").text(response.hits[0].fields.item_name);
    var brand_id = $("<td>").text(response.hits[0].fields.brand_id);
    var item_id = $("<td>").text(response.hits[0].fields.item_id);

    // Append the newly created table data to the table row
    tRow.append(brand_nameTd, item_nameTd, brand_idTd, item_idTd);
    // Append the table row to the table body
    tBody.append(tRow);
}); // This .on("click") function will trigger the AJAX Call
$("#find-nutrtioninformation").on("click", function(event) {

            // event.preventDefault() can be used to prevent an event's default behavior.
            // Here, it prevents the submit button from trying to submit a form when clicked
            event.preventDefault();

            // Here we grab the text from the input box
            var product_supplement = $("#supplement-input").val();
