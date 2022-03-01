// See https://aka.ms/new-console-template for more information
string[] lines = System.IO.File.ReadAllLines(@"../input.txt");
foreach (string line in lines)
{
    Console.WriteLine(line);
}

