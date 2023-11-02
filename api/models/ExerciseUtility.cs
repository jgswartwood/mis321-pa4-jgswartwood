using mis321_pa4_jgswartwood.models;


namespace api.models
{
    public class ExerciseUtility
    {
        public List<Exercise> GetAllExercises(){
            List<Exercise> myExercises = new List<Exercise>();
            myExercises.Add(new Exercise(){Distance = 1, eType = "Running", Date = "11-01-2023", ID = "1", PinStatus = true});
            return myExercises;
        }
    }
}