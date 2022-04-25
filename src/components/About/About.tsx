import React from "react"
import { ContentBox, IContentBox } from '../ContentBox/ContentBox';

const aboutContent: IContentBox = {
  title: "KILKA SŁÓW O NAS",
  subtitle: "CZYLI KIM JESTEŚMY I DOKĄÐ ZMIERZAMY",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices leo tortor, ut ornare erat posuere vel. Mauris sed arcu posuere sem mattis semper. Quisque sed velit vitae ante dapibus sodales. Aenean vel odio consectetur, efficitur arcu nec, vestibulum metus. Aliquam a urna quis quam tincidunt ultricies et et leo. Sed quis ornare purus. Sed interdum, massa vitae pellentesque posuere, felis elit venenatis leo, vitae laoreet libero elit vel felis. Ut mi nunc, auctor sed mauris et, commodo commodo ligula.\n" +
    "\n" +
    "Duis ac blandit arcu. Vivamus nec tempor enim. Vestibulum et nisi lacinia arcu porta facilisis. Nam ornare tincidunt leo ut ultricies. Quisque lobortis ligula sed turpis commodo egestas. Mauris hendrerit finibus turpis vitae tincidunt. In venenatis a nisi in facilisis. Aliquam erat volutpat. Aenean aliquam aliquet purus vel accumsan. Maecenas auctor risus eu metus lobortis bibendum. Nam elit metus, malesuada quis libero non, volutpat tempor neque. Nam vel orci sit amet enim egestas aliquam sed et est. Aenean hendrerit pulvinar interdum.\n" +
    "\n" +
    "Curabitur fringilla maximus velit, placerat scelerisque risus condimentum id. Suspendisse diam leo, posuere vel facilisis ac, cursus in ante. Integer facilisis turpis a scelerisque condimentum. In placerat varius sodales. Pellentesque placerat tortor quis commodo vehicula. Mauris dapibus, sapien ut rutrum varius, nunc dui interdum lectus, ut fringilla diam erat nec mauris. Proin pellentesque vulputate purus eu iaculis."
}
export const About = () => {
  return <ContentBox { ...aboutContent }/>
}