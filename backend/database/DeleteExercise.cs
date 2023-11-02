using mis321_pa4_jgswartwood.interfaces;
using MySql.Data.MySqlClient;

namespace mis321_pa4_jgswartwood.database
{
    public class DeleteExercise : IDeleteExercise
    {
        public static void DropExerciseTable(){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"DROP TABLE IF EXISTS exercises";

            using var cmd = new MySqlCommand(stm, con);

            cmd.ExecuteNonQuery();

        }
        void IDeleteExercise.DeleteExercise(int id)
        {
            throw new System.NotImplementedException();
        }

    }
}