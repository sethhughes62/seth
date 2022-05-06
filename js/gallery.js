// A $( document ).ready() block.
$(document).ready(function () {
  $("#ngy2p").nanogallery2({
    thumbnailWidth: "300",
    thumbnailHeight: "auto",
    thumbnailBorderVertical: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailLabel: {
      position: "overImageOnBottom"
    },
    thumbnailHoverEffect2: "imagescaleIn80|imageSepiaOff|labelAppear75",
    thumbnailGutterWidth: 20,
    thumbnailGutterHeight: 20,

    thumbnailAlignment: "center",
    thumbnailOpenImage: true
  });
});
