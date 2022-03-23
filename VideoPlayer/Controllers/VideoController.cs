using AutoMapper;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VideoPlayer.Models;

namespace VideoPlayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideoController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public VideoController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetVideosList()
        {
            var videos = await _context.Videos.Select(video => _mapper.Map<VideoViewModel>(video)).ToListAsync();
            return Ok(videos);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetVideoById(int id)
        {
            var res = await _context.Videos.Where(x => x.Id == id)
                      .Select(vid=>_mapper.Map<VideoItemViewModel>(vid)).FirstAsync();

            if (res == null)
            {
                return BadRequest(new { message = "Запису з таким айді не існує" });
            }

            return Ok(res);
        }
    }
}
