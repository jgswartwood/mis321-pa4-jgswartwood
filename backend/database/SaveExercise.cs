using mis321_pa4_jgswartwood.interfaces;
using mis321_pa4_jgswartwood.models;
using MySql.Data.MySqlClient;

namespace mis321_pa4_jgswartwood.database
{

    public class SaveExercise : ISaveExercise
    {
        public static void CreateExerciseTable(){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"CREATE TABLE exercises(id INTEGER PRIMARY KEY AUTO_INCREMENT, eType TEXT, Distance INTEGER)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.ExecuteNonQuery();
        }
        public void CreateExercise(Exercise myExercise){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO exercises(eType, Distance) VALUES(@eType, @Distance)";

            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@eType", myExercise.eType);
            cmd.Parameters.AddWithValue("@Distance", myExercise.Distance);

            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }

        void ISaveExercise.SaveExercise(Exercise myExercise){
            throw new System.NotImplementedException();
        }
        
    }
}