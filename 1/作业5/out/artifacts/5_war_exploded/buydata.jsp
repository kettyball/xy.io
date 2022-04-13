<%--
  Created by IntelliJ IDEA.
  User: 93276
  Date: 2022/4/14
  Time: 0:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" import="java.util.*" %>
<html>
<head>
    <title>buydata</title>
</head>
<body>
<%
    request.setCharacterEncoding("utf-8");
    //获取checkbox里的内容
    String[] post = request.getParameterValues("data");
    //获取原本保存在session里的内容
    Set<String> now = (Set<String>)session.getAttribute("list");
    //新建一个集合，用来保存选择的商品
    Set<String> set = new HashSet<String>();
    //如果post数组不为空，将post数组里的内容全部加入set集合
    if(post!=null)
        Collections.addAll(set, post);
    // 将原本的数据也加入到set集合中，set集合会自动去除重复的内容
    if(now!=null)
        set.addAll(now);
    //将set集合对象保存到session里
    session.setAttribute("list", set);	%>
<script type="text/javascript">
    history.go(-1); //返回上一个页面
</script>

</body>
</html>
