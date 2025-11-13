import java.util.Scanner;


public class testing {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Hello, ZA WARUSOO!!!!");
        System.out.println("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Nice to meet you, " + name + "!");

        System.out.println("Enter your favorite anime: ");
        String anime = scanner.nextLine();
        System.out.println(name + ", your favorite anime is " + anime + "!");
    }
}
