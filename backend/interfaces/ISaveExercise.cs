using mis321_pa4_jgswartwood.models;

namespace mis321_pa4_jgswartwood.interfaces
{
    public interface ISaveExercise
    {
         public void CreateExercise(Exercise myExercise);
         public void SaveExercise(Exercise myExercise);
    }
}