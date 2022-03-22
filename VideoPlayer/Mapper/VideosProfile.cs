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
                .ForMember(dest => dest.Title,opt => opt.MapFrom(dest=>dest.Title))
                .ForMember(dest => dest.PrewVideoUrl, opt => opt.MapFrom(dest => dest.PrewVideoUrl))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(dest => dest.Description))
                .ForMember(dest => dest.VideoUrl, opt => opt.MapFrom(dest => dest.VideoUrl));
        }
    }
}
