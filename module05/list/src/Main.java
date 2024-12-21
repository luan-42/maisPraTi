import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Exercício 1: Calculadora
        System.out.println("--- Calculadora ---");
        System.out.println("Digite o primeiro número:");
        double n1 = sc.nextDouble();
        System.out.println("Digite o segundo número:");
        double n2 = sc.nextDouble();
        System.out.println("Digite o operador (+, -, *, /):");
        String operator = sc.next();

        Double result = operate(n1, n2, operator);
        if (result != null) {
            System.out.println("O resultado de " + n1 + " " + operator+ " " + n2 + " é " + result);
        } else {
            System.out.println("Operador não existe!");
        }

        // Exercício 2: Verificar se é um palíndromo
        System.out.println("--- Analisador de palíndromo ---");
        System.out.println("Digite uma palavra: ");
        String word = sc.next();

        if (isPalindrome(word)) {
            System.out.println("A palavra " + word + " é um palíndromo!");
        } else {
            System.out.println("A palavra " + word + " NÃO é um palíndromo!");
        }

        // Exercício 3: Fibonacci
        System.out.println("--- Fibonacci ---");
        System.out.println("Digite o tamanho da sequência de Fibonacci:");
        int fibonacci_size = sc.nextInt();
        fibonacci(fibonacci_size);

        // Exercício 4: Inverter número
        System.out.println("--- Inverter número ---");
        System.out.println("Digite um número: ");
        String number = sc.next();
        System.out.println("O número invertido é: " + reverse(number));

        // Exercício 5: É um anagrama
        System.out.println("--- Analisador de anagrama ---");
        System.out.println("Digite a primeira palavra: ");
        String firstWord = sc.next();
        System.out.println("Digite a segunda palavra: ");
        String secondWord = sc.next();

        if (isAnagrams(firstWord, secondWord)) {
            System.out.println("A palavra " + firstWord + " e " + secondWord + " são anagramas!");
        } else {
            System.out.println("A palavra " + firstWord + " e " + secondWord + " NÃO são anagramas!");
        }

        // Exercício 6: Jogo de adivinhação
        guessingGame(sc);

        // Exercício 7: Contador de palavras
        System.out.println("--- Contador de palavras ---");
        System.out.println("Digite uma frase: ");
        sc.nextLine(); // Consumir a quebra de linha
        String phrase = sc.nextLine();
        System.out.println("A frase possui " + countWord(phrase.trim()) + " palavras!");
    }

    static Double operate(double a, double b, String operator) {
        return switch (operator) {
            case "+" -> a + b;
            case "-" -> a - b;
            case "*" -> a * b;
            case "/" -> a / b;
            default -> null;
        };
    }

    static boolean isPalindrome(String word) {
        word = word.toLowerCase();
        int size = word.length();
        for (int i = 0; i < size; i++) {
            if (word.charAt(i) != word.charAt(size-1-i)) {
                return false;
            }
        }
        return true;
    }

    static void fibonacci(int n) {
        ArrayList<Integer> sequence = new ArrayList<>();
        sequence.add(0);
        sequence.add(1);
        while (sequence.size() < n) {
            sequence.add(sequence.getLast() + sequence.get(sequence.size() - 2));
        }
        System.out.println(sequence);
    }

    static String reverse(String n) {
        StringBuilder str = new StringBuilder(n);
        return str.reverse().toString();
    }

    static boolean isAnagrams(String word, String anotherWord) {
        char[] wordArray = word.toLowerCase().toCharArray();
        char[] anotherWordArray = anotherWord.toLowerCase().toCharArray();
        Arrays.sort(wordArray);
        Arrays.sort(anotherWordArray);
        return new String(wordArray).equals(new String(anotherWordArray));
    }

    static void guessingGame(Scanner sc) {
        int computerChoice =  (int) (Math.random() * 50) + 1;
        int userChoice;
        System.out.println("--- Adivinhe o número escohlido pelo comoputador de 1 a 50 ---");
        do {
            System.out.println("Digite seu palpite: ");
            userChoice = sc.nextInt();
            if (computerChoice > userChoice) {
                System.out.println("O número é maior. Tente Novamente!");
            } else if (computerChoice < userChoice){
                System.out.println("O número é menor. Tente Novamente!");
            }
        } while (computerChoice != userChoice);
        System.out.printf("Parabéns você adivinhou! O computador pensou no número %d!%n", computerChoice);
    }

    static int countWord(String line) {
        if (line.isEmpty()) {
            return 0;
        }
        return line.split("\\s+").length;
    }
}