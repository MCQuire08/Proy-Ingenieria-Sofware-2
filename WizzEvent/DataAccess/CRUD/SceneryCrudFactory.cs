using DataAccess.DAO;
using DataAccess.Mapper;
using DTOs;
using DTOs.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.CRUD
{
    public class SceneryCrudFactory : CrudFactory
    {
        SceneryMapper _mapper;

        public SceneryCrudFactory()
        {
            _dao = SqlDao.GetInstance();
            _mapper = new SceneryMapper();
        }


        #region"Scenery"
        public override void Create(BaseDTO dto)
        {
            var scenery = (Scenery)dto;

            var sqlOperation = _mapper.GetCreateStatement(scenery);

            _dao.ExecuteProcedure(sqlOperation);
        }

        public override void Delete(BaseDTO dto)
        {
            var scenery = (Scenery)dto;

            var sqlOperation = _mapper.GetDeleteStatement(scenery);

            _dao.ExecuteProcedure(sqlOperation);
        }

        public override List<T> RetrieveAll<T>()
        {
            var lstSceneries = new List<T>();

            var sqlOperation = _mapper.GetRetrieveAllStatement();

            var lstResults = _dao.ExecuteQueryProcedure(sqlOperation);

            if (lstResults.Count > 0)
            {
                var objs = _mapper.BuildObjects(lstResults);

                foreach (var obj in objs)
                {
                    lstSceneries.Add((T)Convert.ChangeType(obj, typeof(T)));
                }
            }
            return lstSceneries;
        }

        public override T RetrieveById<T>(BaseDTO dto)
        {
            throw new NotImplementedException();
        }

        public override void Update(BaseDTO dto)
        {
            var scenery = (Scenery)dto;

            var sqlOperation = _mapper.GetUpdateStatement(scenery);

            _dao.ExecuteProcedure(sqlOperation);
        }

        #endregion

        #region"Sector"
        public void CreateSector(Sector sector)
        {
            var sqlOperation = _mapper.GetCreateSectorStatement(sector.IdScenery,sector);

            _dao.ExecuteProcedure(sqlOperation);
        }

        public List<T> RetrieveAllSector<T>(int idScenery)
        {
            var lstSectors = new List<T>();

            var sqlOperation = _mapper.GetRetrieveAllSectorStatement(idScenery);

            var lstResults = _dao.ExecuteQueryProcedure(sqlOperation);

            if (lstResults.Count > 0)
            {
                var objs = _mapper.BuildObjectsSector(lstResults);

                foreach (var obj in objs)
                {
                    lstSectors.Add((T)Convert.ChangeType(obj, typeof(T)));
                }
            }

            return lstSectors;
        }

        public void DeleteSector(Sector sector)
        {
            var sqlOperation = _mapper.GetDeleteSectorStatement(sector.IdScenery,sector.Id);

            _dao.ExecuteProcedure(sqlOperation);
        }
        #endregion

        #region"Seat"
        public void CreateSeat(Seat seat)
        {
            var sqlOperation = _mapper.GetCreateSeatStatement(seat);

            _dao.ExecuteProcedure(sqlOperation);
        }

        public void DeleteSeat(Seat seat)
        {
            var sqlOperation = _mapper.GetDeleteSeatStatement(seat);

            _dao.ExecuteProcedure(sqlOperation);
        }

        public List<T> RetrieveAllSeatsOfSector<T>(int idScenery, int idSector)
        {
            var lstSeats = new List<T>();

            var sqlOperation = _mapper.GetRetrieveAllSeatsOfSectorStatement(idScenery, idSector);

            var lstResults = _dao.ExecuteQueryProcedure(sqlOperation);

            if (lstResults.Count > 0)
            {
                var objs = _mapper.BuildObjectsSeat(lstResults);

                foreach (var obj in objs)
                {
                    lstSeats.Add((T)Convert.ChangeType(obj, typeof(T)));
                }
            }

            return lstSeats;
        }

        public override T RetrieveByEmailAndPassword<T>(BaseDTO dto)
        {
            throw new NotImplementedException();
        }
        #endregion
    }
}
