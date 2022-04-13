<%--
  Created by IntelliJ IDEA.
  User: 93276
  Date: 2022/4/14
  Time: 0:20
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.io.*,java.util.*"%>
<html>
<head>
    <title>Title</title>
</head>
<body>


<body>
<p>你选择了：</p><br>
<center>
    <%   Set<String> getN = (Set<String>) session.getAttribute("list");
        if (getN != null)
            for (Iterator it = getN.iterator(); it.hasNext(); )
                out.print(it.next().toString() + "<br>");
    %>
    <a href="./clear.jsp">清空购物车</a>
</center>
</body>
</html>
