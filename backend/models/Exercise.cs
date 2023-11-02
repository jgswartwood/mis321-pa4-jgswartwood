using mis321_pa4_jgswartwood.database;
using mis321_pa4_jgswartwood.interfaces;

namespace mis321_pa4_jgswartwood.models
{
    public class Exercise
    {
         public int Distance {get; set;}

         public string eType {get; set;}

         public string Date {get; set;}

         public string ID {get; set;}

         public bool PinStatus {get; set;}


         public ISaveExercise Save {get; set;}

         public Exercise(){
            Save = new SaveExercise();
         }
    }
}