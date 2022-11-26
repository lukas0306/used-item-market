import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import { UPDATE_QUESTION } from "../list/MarketCommentList.queries";
import MarketCommentUI from "./MarketComment.presenter";
import {
  CREATE_ANSWER,
  CREATE_USEDITEM_QUESTION,
  FETCH_ANSWERS,
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_ANSWER,
} from "./MarketComment.queries";

export default function MarketComment() {
  const [contents, setContents] = useState("");
  const router = useRouter();

  const handleChangeInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const [createMarketQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);

  const [updateMarketQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_QUESTION);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS);

  const [createMarketAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_ANSWER);

  const [updateMarketAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_ANSWER);

  const { data: answerData, refetch: answerRefetch } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_ANSWERS);

  const createQuestion = async () => {
    try {
      if (contents) {
        await createMarketQuestion({
          variables: {
            createUseditemQuestionInput: {
              contents,
            },
            useditemId: String(router.query.useditemId),
          },
        });
        refetch({ useditemId: String(router.query.useditemId) });
        setContents("");
        alert("질문을 등록했습니다.");
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  const updateQuestion = async () => {
    try{
      if (!props.el?._id) return;

      await updateMarketAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents,
          },
          useditemQuestionId: event?.target.id,
        }
      })
      
    }catch(error:any){
      alert(error.message)}
  }
  return <MarketCommentUI />;

  
}
