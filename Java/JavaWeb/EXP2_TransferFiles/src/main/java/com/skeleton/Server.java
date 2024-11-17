package com.skeleton;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Arrays;

public class Server {
    public static void main(String[] args) {
        try {
            ServerSocket server = new ServerSocket(1417);
            System.out.println("已创建服务，正在等待连接......");
            Socket socket = server.accept();
            System.out.println("客户端已连接到服务端，ip地址为:"+socket.getInetAddress().getHostAddress());
            System.out.println("正在等待读取客户端发送数据...");
            // 超时没发送就抛出超时异常
            socket.setSoTimeout(30000);

            // 读取请求头
            BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            StringBuilder requestHeader = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null && !line.isEmpty()) {
                requestHeader.append(line).append("\n");
                if (line.trim().isEmpty()) { // 空行表示请求头结束
                    break;
                }
            }

            System.out.println("已收到客户端发送的请求头：");
            System.out.println(requestHeader.toString());

            // 响应客户端
            OutputStreamWriter writer = new OutputStreamWriter(socket.getOutputStream());
            writer.write("HTTP/1.1 200 OK\r\n");
            writer.write("Content-Type: text/html; charset=utf-8\r\n");
            writer.write("\r\n");
            writer.write("<html><head><title>Hello</title></head><body><h1>Hello&nbsp;World</h1></body></html>");
            writer.flush();

            socket.close();
            System.out.println("服务端已关闭");
        } catch (IOException e) {
            System.out.println("连接失败");
            throw new RuntimeException(e);
        }
    }
}
