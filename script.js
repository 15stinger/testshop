$(".item").click(function (event) {
	$(".item").removeClass("active");
	$(this).addClass("active");
	console.log("active elem is done");
	return false;
});

$(".watchesmenu li").click(function (event) {
	$(".watchesmenu li").removeClass("active");
	$(this).addClass("active");
	console.log("active elem is done");
	return false;
});

$(".watchesmenu li:first").click(function (event) {
	$("#furnitures").css("display", "none");
	$("#mobile").css("display", "none");
	$("#cloth").css("display", "none");
	$("#toys").css("display", "none");
	$("#fashion").css("display", "inline-block");
});
$(".watchesmenu li:nth-child(2)").click(function (event) {
	$("#fashion").css("display", "none");
	$("#mobile").css("display", "none");
	$("#cloth").css("display", "none");
	$("#toys").css("display", "none");
	$("#furnitures").css("display", "inline-block");
});
$(".watchesmenu li:nth-child(3)").click(function (event) {
	$("#fashion").css("display", "inline-block");
	$("#mobile").css("display", "inline-block");
	$("#cloth").css("display", "inline-block");
	$("#toys").css("display", "inline-block");
	$("#furnitures").css("display", "inline-block");
});
$(".watchesmenu li:nth-child(4)").click(function (event) {
	$("#fashion").css("display", "none");
	$("#furnitures").css("display", "none");
	$("#cloth").css("display", "none");
	$("#toys").css("display", "none");
	$("#mobile").css("display", "inline-block");
});
$(".watchesmenu li:nth-child(5)").click(function (event) {
	$("#fashion").css("display", "none");
	$("#furnitures").css("display", "none");
	$("#toys").css("display", "none");
	$("#mobile").css("display", "none");
	$("#cloth").css("display", "inline-block");
});
$(".watchesmenu li:nth-child(6)").click(function (event) {
	$("#fashion").css("display", "none");
	$("#furnitures").css("display", "none");
	$("#cloth").css("display", "none");
	$("#mobile").css("display", "none");
	$("#toys").css("display", "inline-block");
});