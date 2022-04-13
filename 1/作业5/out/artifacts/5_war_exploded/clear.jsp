<%--
  Created by IntelliJ IDEA.
  User: 93276
  Date: 2022/4/14
  Time: 0:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>clear</title>
</head>
<body>
<% session.invalidate(); %>
<script type="text/javascript">
    alert("清除成功，请刷新");
    history.go(-1);
</script>
</body>
</html>
