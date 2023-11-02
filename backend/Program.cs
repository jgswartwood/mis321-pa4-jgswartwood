using mis321_pa4_jgswartwood.database;
using mis321_pa4_jgswartwood.models;
using System;

namespace mis321_pa4_jgswartwood{
    class Program{
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World");
            DeleteExercise.DropExerciseTable();
            SaveExercise.CreateExerciseTable();
        }
    }
}
