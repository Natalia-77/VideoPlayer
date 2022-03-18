using AutoMapper;
using Domain.Entities;
using VideoPlayer.Models;

namespace VideoPlayer.Mapper
{
    public class VideosProfile : Profile
    {
        public VideosProfile()
        {
            CreateMap<Videos, VideoViewModel>()
                .ForMember(dest => dest.Poster, opt => opt.MapFrom(dest => dest.Poster))
                .ForMember();
        }
    }
}
