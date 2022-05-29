var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "Thông Tin Của Tớ";
	$scope.updateInfo = "WELLCOME";
	$scope.verify = "Verify";
	$scope.des = "Mô Tả Về Bản Thân Tôi !";
	$scope.cv = "Công việc";
	$scope.job1 = "https://dmquang.github.io/mquangwwithlove.github.io/";
	$scope.job2 = "Lập trình viên mới nhú :33";
	$scope.contact = "Thông tin liên hệ";
	$scope.contact1 = "quang722008@gmail.com";
	$scope.contact2 = "facebook.com/100081547129118";
	$scope.contactmi = " LIÊN HỆ TỚ";
	$scope.ifyou = "cứ ib thoải mái :>";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal3 = "TikTok";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://www.facebook.com/profile.php?id=100081547129118";
	$scope.linkzl = "https://zalo.me/0382260726";
	$scope.linksc = "https://www.tiktok.com/@mq_0702";
	$scope.linkgm = "quang722008@gmail.com";
	$scope.phonenumber = "0372760208 - Việt theo =))";
	$scope.email = "quang722008@gmail.com";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "Mquang là biệt danh duy nhất của tớ. Tớ bắt đầu có hứng thú với lập trình từ năm lớp 6 và đã bắt đầu học từ Python nhưng Programming Language mình hay dùng là HTML, JavaScript.";
	$scope.contentStory2 = "Trong suốt hai năm qua, Tớ cảm thấy mình chưa có tiến bộ nhiều trong học tập. Cảm thấy mình cần bổ sung nhiều kiến thức hơn.";
	$scope.storytitle1 = "Một chút tiểu sử <3";
	$scope.storytitle2 = "Tớ đã học lập trình được 2 năm hehee";
	$scope.nothinglikeus = "Thank for watching";
	$scope.thankall = "Cảm ơn mọi người đã ủng hộ ❤";
	$scope.au = "Mquang";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});