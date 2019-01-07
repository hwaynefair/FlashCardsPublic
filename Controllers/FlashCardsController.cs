using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoreAPI21;

namespace CoreAPI21withAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlashCardsController : ControllerBase
    {
        private readonly DB_48034_zenosoftContext _context;

        public FlashCardsController(DB_48034_zenosoftContext context)
        {
            _context = context;
        }


        [HttpGet, Route("GetFlashCardsReport")]
        public async Task<IActionResult> GetFlashCardsReport()
        {
            var flashcardsList = await _context.FlashCards.FromSql("GetFlashCards 'Angular'").ToListAsync();

            return Ok(flashcardsList);
        }



        [HttpGet, Route("GetFlashCardsCount")]
        public async Task<IActionResult> GetFlashCardsCount(Int32 id)
        {
            var cnt = await _context.FlashCards.MaxAsync(d => d.Id);

            return Ok(cnt);
        }


        [HttpGet]
        [Route("GetFlashCardsNext/{id:int}")]
        public async Task<IActionResult> GetFlashCardsNext(Int32 id)
        {
            FlashCards FlashCardsTest = await _context.FlashCards.Where(r => r.Id > id).ToAsyncEnumerable().FirstOrDefault();
            if (FlashCardsTest == null)
            {
                return NotFound();
            }

            return Ok(FlashCardsTest);
        }




        [HttpGet]
        [Route("GetFlashCardsPrev/{id:int}")]
        public async Task<IActionResult> GetFlashCardsPrev(Int32 id)
        {
            FlashCards FlashCards = await _context.FlashCards.Where(r => r.Id < id).ToAsyncEnumerable().LastOrDefault();
            if (FlashCards == null)
            {
                return NotFound();
            }

            return Ok(FlashCards);
        }

        //EditFlashCard
        [HttpPut]
        [Route("EditFlashCard/{id:int}")]
        public async Task<IActionResult> EditFlashCard(Int32 id, FlashCards flashCards)
        {
            if (id != flashCards.Id)
            {
                return BadRequest();
            }

            _context.Entry(flashCards).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost]
        [Route("CreateFlashCard")]
        public async Task<IActionResult> CreateFlashCard([FromBody] FlashCards flashCards)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

           await _context.FlashCards.AddAsync(flashCards);
           await _context.SaveChangesAsync();

            return Ok(flashCards);
        }
         

        [HttpDelete]
        [Route("RemoveFlashCards/{id:int}")]
        public async Task<IActionResult> RemoveFlashCards(int id)
        {
            FlashCards flashCards = await _context.FlashCards.FindAsync(id);
            if (flashCards == null)
            {
                return NotFound();
            }

            _context.FlashCards.Remove(flashCards);

            await _context.SaveChangesAsync();

            return Ok(flashCards);
        }

      
    }
}