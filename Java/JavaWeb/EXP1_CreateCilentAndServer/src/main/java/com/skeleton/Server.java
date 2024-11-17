package com.skeleton;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static void main(String[] args) {
        try {
            ServerSocket server = new ServerSocket(1417);
            System.out.println("已创建服务，正在等待连接...");
            Socket socket = server.accept();
            System.out.println("客户端已连接到服务端，ip地址为:"+socket.getInetAddress().getHostAddress());
            System.out.println("等待读取客户端发送数据...");
            // 超时没发送就抛出超时异常
            socket.setSoTimeout(3000);
            BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            // 逐行读取
            System.out.println(reader.readLine());

            OutputStreamWriter writer = new OutputStreamWriter(socket.getOutputStream());
            writer.write("服务端已收到信息\n");
            writer.flush();

            socket.close();
            System.out.println("服务端已关闭");
        } catch (IOException e) {
            System.out.println("连接失败");
            throw new RuntimeException(e);
        }
    }
}
