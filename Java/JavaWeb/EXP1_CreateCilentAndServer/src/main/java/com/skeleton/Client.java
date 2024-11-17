package com.skeleton;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class Client {
    public static void main(String[] args) {
        try (Socket socket = new Socket("192.168.50.232",1417);
             Scanner scanner = new Scanner(System.in)
             // 也可使用无参构造等会再连接
             // Socket socket = new Socket();
             // socket.connect(new InetSocketAddress("192.168.50.232", 1417), 1000)
        ){
            System.out.println("客户端已连接到服务端");
            OutputStreamWriter writer = new OutputStreamWriter(socket.getOutputStream());
            System.out.println("请输入要发送的消息：");
            writer.write(scanner.nextLine()+"\n");
            writer.flush();
            System.out.println("信息已发送,等待服务端确认...");

            BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            // 逐行读取
            System.out.println(reader.readLine());

            socket.close();
            System.out.println("客户端已断开连接");
        } catch (IOException e) {
            System.out.println("服务端连接失败！");
            throw new RuntimeException(e);
        }
    }
}
