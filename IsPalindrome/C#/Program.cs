// See https://aka.ms/new-console-template for more information
bool IsPalindrome(string str) {
    for(int i = 0; i < str.Length / 2; i++) {
        if(str[i] != str[str.Length - i - 1]) {
            return false;
        }
    }
    return true;
}

string[] lines = System.IO.File.ReadAllLines(@"../input.txt");
foreach (string line in lines)
{
    Console.WriteLine($"{line}: {IsPalindrome(line)}");
}

