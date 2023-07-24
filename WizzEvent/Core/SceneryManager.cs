using DataAccess.CRUD;
using DTOs.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public class SceneryManager
    {
        public SceneryManager() { }

        #region"Scenery"
        public void CreateScenery(Scenery scenery)
        {
            var crud = new SceneryCrudFactory();
            crud.Create(scenery);
        }

        public void UpdateScenery(Scenery scenery)
        {
            var crud = new SceneryCrudFactory();
            crud.Update(scenery);
        }

        public void DeleteScenery(Scenery scenery)
        {
            var crud = new SceneryCrudFactory();
            crud.Delete(scenery);
        }

        public List<Scenery> RetrieveAllSceneries()
        {
            var crud = new SceneryCrudFactory(); 
            return crud.RetrieveAll<Scenery>();
        }
        #endregion

        #region"Sector"
        public void CreateSector(Sector sector)
        {
            var crud = new SceneryCrudFactory();
            crud.CreateSector(sector);
        }

        public void DeleteSector(Sector sector)
        {
            var crud = new SceneryCrudFactory();
            crud.DeleteSector(sector);
        }

        public List<Sector> RetrieveAllSector(int idScenery)
        {
            var crud = new SceneryCrudFactory();
            return crud.RetrieveAllSector<Sector>(idScenery);
        }
        #endregion

        #region"Seat"
        public void CreateSeat(Seat seat)
        {
            var crud = new SceneryCrudFactory();
            crud.CreateSeat(seat);
        }

        public void DeleteSeat(Seat seat)
        {
            var crud = new SceneryCrudFactory();
            crud.DeleteSeat(seat);
        }

        public List<Seat> RetrieveAllSeatsOfSector(int idScenery, int idSector)
        {
            var crud = new SceneryCrudFactory();
            return crud.RetrieveAllSeatsOfSector<Seat>(idScenery,idSector);
        }
        #endregion
    }
}
