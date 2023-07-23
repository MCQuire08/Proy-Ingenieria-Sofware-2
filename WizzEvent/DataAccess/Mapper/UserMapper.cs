using DataAccess.DAO;
using DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Mapper
{
    public class UserInformationMapper : ISqlStatements, IObjectMapper
    {
        public BaseDTO BuildObject(Dictionary<string, object> row)
        {
            var userDTO = new UserInformation
            {
                Id = (int)row["IdUser"],
                Nombre = (string)row["Nombre"],
                Apellidos = (string)row["Apellidos"],
                TipoIdentificacion = (string)row["TipoIdentificacion"],
                NumeroIdentificacion = (string)row["NumeroIdentificacion"],
                Email = (string)row["Email"],
                Telefono = (string)row["Telefono"],
                CedulaImagen = (string)row["CedulaImagen"],
                Password = (string)row["Password"],
                ConfirmPassword = (string)row["ConfirmPassword"]
            };
            return userDTO;
        }

        public List<BaseDTO> BuildObjects(List<Dictionary<string, object>> row)
        {
            var lstResults = new List<BaseDTO>();
            foreach (var item in row)
            {
                var userDTO = BuildObject(item);
                lstResults.Add(userDTO);
            }
            return lstResults;
        }

        public SQLOperation GetCreateStatement(BaseDTO dto)
        {
            var sqlOperation = new SQLOperation();
            sqlOperation.ProcedureName = "CRE_USER_PR"; 

            var user = (User)dto;

            sqlOperation.AddVarcharParam("P_NOMBRE", user.Nombre);
            sqlOperation.AddVarcharParam("P_APELLIDOS", user.Apellidos);
            sqlOperation.AddVarcharParam("P_TIPO_IDENTIFICACION", user.TipoIdentificacion);
            sqlOperation.AddVarcharParam("P_NUMERO_IDENTIFICACION", user.NumeroIdentificacion);
            sqlOperation.AddVarcharParam("P_EMAIL", user.Email);
            sqlOperation.AddVarcharParam("P_TELEFONO", user.Telefono);
            sqlOperation.AddVarcharParam("P_CEDULA_IMAGEN", user.CedulaImagen);
            sqlOperation.AddVarcharParam("P_PASSWORD", user.Password);
            sqlOperation.AddVarcharParam("P_CONFIRM_PASSWORD", user.ConfirmPassword);

            return sqlOperation;
        }

        public SQLOperation GetDeleteStatement(BaseDTO dto)
        {
            var sqlOperation = new SQLOperation();
            sqlOperation.ProcedureName = "DEL_USER_PR"; 

            var user = (User)dto;

            sqlOperation.AddIntParam("P_USER_ID", user.Id);

            return sqlOperation;
        }

        public SQLOperation GetRetrieveAllStatement()
        {
            var sqlOperation = new SQLOperation();
            sqlOperation.ProcedureName = "RET_ALL_USERS_PR"; /
            return sqlOperation;
        }

        public SQLOperation GetRetrieveByIDStatement(BaseDTO dto)
        {
            var sqlOperation = new SQLOperation();
            sqlOperation.ProcedureName = "RET_BY_ID_USER_PR"; 

            var user = (UserInformation)dto;
            sqlOperation.AddIntParam("P_ID", user.Id);

            return sqlOperation;
        }

        public SQLOperation GetUpdateStatement(BaseDTO dto)
        {
            var sqlOperation = new SQLOperation();
            sqlOperation.ProcedureName = "UPD_USER_PR"; 

            var user = (User)dto;

            sqlOperation.AddIntParam("P_ID", user.Id);
            sqlOperation.AddVarcharParam("P_NOMBRE", user.Nombre);
            sqlOperation.AddVarcharParam("P_APELLIDOS", user.Apellidos);
            sqlOperation.AddVarcharParam("P_TIPO_IDENTIFICACION", user.TipoIdentificacion);
            sqlOperation.AddVarcharParam("P_NUMERO_IDENTIFICACION", user.NumeroIdentificacion);
            sqlOperation.AddVarcharParam("P_EMAIL", user.Email);
            sqlOperation.AddVarcharParam("P_TELEFONO", user.Telefono);
            sqlOperation.AddVarcharParam("P_CEDULA_IMAGEN", user.CedulaImagen);
            sqlOperation.AddVarcharParam("P_PASSWORD", user.Password);
            sqlOperation.AddVarcharParam("P_CONFIRM_PASSWORD", user.ConfirmPassword);

            return sqlOperation;
        }
    }
}
