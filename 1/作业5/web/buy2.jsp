<%--
  Created by IntelliJ IDEA.
  User: 93276
  Date: 2022/4/14
  Time: 0:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<p>体育用品，一律十元</p>
<form action="buydata.jsp" method="POST">
    <input type ="checkbox" name="data" value="篮球">篮球<br>
    <input type ="checkbox" name="data" value="足球">足球<br>
    <input type ="checkbox" name="data" value="排球">排球<br>
    <input type="submit" value="提交">
    <input type="reset" value="重设">
</form>
<br> <a href="buy1.jsp">看看其他</a>   <a href="display.jsp">查看购物车</a>
</body>
</html>
